import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, HeadingLevel } from 'docx';

export default function ActionButtons(props) {
  const { grants, setCurrentPage } = props;

  const handleExportToWord = async () => {
    const doc = new Document();

    const grantParagraphs = grants().flatMap((grant) => [
      new Paragraph({
        text: grant.name,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: grant.description,
      }),
      new Paragraph({
        text: `Eligibility Criteria: ${grant.eligibilityCriteria}`,
      }),
      new Paragraph({
        text: `Website: ${grant.website}`,
      }),
    ]);

    doc.addSection({
      children: [
        new Paragraph({
          text: 'Grant Results',
          heading: HeadingLevel.HEADING_1,
        }),
        ...grantParagraphs,
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'GrantResults.docx');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Grant Results',
          text: `Here are the grants suitable for our business:\n\n${grants()
            .map(
              (grant) =>
                `Grant Name: ${grant.name}\nDescription: ${grant.description}\nEligibility Criteria: ${grant.eligibilityCriteria}\nWebsite: ${grant.website}\n`
            )
            .join('\n')}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div class="flex flex-wrap mt-6 space-x-4">
      <button
        onClick={handleExportToWord}
        class="mt-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Export to MS Word
      </button>
      <button
        onClick={handleShare}
        class="mt-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Share Results
      </button>
      <button
        onClick={handlePrint}
        class="mt-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Print Results
      </button>
      <button
        onClick={() => setCurrentPage('welcome')}
        class="mt-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Start Over
      </button>
    </div>
  );
}