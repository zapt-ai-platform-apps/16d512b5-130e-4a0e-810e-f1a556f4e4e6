import { createSignal } from 'solid-js';
import QuestionsFormFields from './QuestionsFormFields';

export default function QuestionsForm(props) {
  const { answers, setAnswers, setCurrentPage, setLoading, loading, setGrants } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/getGrants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: answers() }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API response:', data);

      setGrants(data.grants);
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