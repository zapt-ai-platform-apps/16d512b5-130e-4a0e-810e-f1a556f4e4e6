import { createSignal } from 'solid-js';
import QuestionsFormFields from './QuestionsFormFields';

export default function QuestionsForm(props) {
  const { answers, setAnswers, setCurrentPage, setLoading, loading, setGrants } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Based on the following business information, provide a list of UK-wide and local grants suitable for the business.
Please output the results in the following JSON format:
{
  "grants": [
    {
      "name": "Grant Name",
      "description": "Detailed description of the grant",
      "eligibilityCriteria": "Eligibility criteria for the grant",
      "website": "Link to the grant's website"
    },
    ...
  ]
}

Business information:
1. Business Description: ${answers().businessDescription}
2. Customer Types: ${answers().customerTypes}
3. Sector: ${answers().sector}
4. Annual Turnover: ${answers().annualTurnover}
5. Years Operating: ${answers().yearsOperating}
6. Business Location: ${answers().businessLocation}
7. Supply Area: ${answers().supplyArea}

Please make sure the response is in JSON format as specified.`;

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_PERPLEXITY_API_KEY}`,
        },
        body: JSON.stringify({
          "model": "llama-3.1-sonar-small-128k-online",
          "messages": [
            {
              "role": "system",
              "content": "Be precise and concise.",
            },
            {
              "role": "user",
              "content": prompt,
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Perplexity API response:', data);

      // Extract the assistant's reply
      const resultText = data.choices[0].message.content;

      // Parse the JSON response
      const result = JSON.parse(resultText);

      setGrants(result.grants);
      setCurrentPage('results');
    } catch (error) {
      console.error('Error fetching grants:', error);
      alert('There was an error fetching grants. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="max-w-xl bg-white p-6 rounded-lg shadow-md">
      <QuestionsFormFields answers={answers} setAnswers={setAnswers} loading={loading} />
    </form>
  );
}