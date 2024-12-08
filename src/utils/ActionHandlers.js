import { Packer, Document, Paragraph, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

export async function handleExportToWord(grants, setExportLoading) {
  setExportLoading(true);
  console.log('Starting to export grants to Word document');
  try {
    const doc = new Document();

    const grantParagraphs = grants().flatMap((grant) => [
      new Paragraph({
        text: grant.name,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: grant.description,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: `Eligibility Criteria: ${grant.eligibilityCriteria}`,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: `Website: ${grant.website}`,
        spacing: { after: 400 },
      }),
    ]);

    doc.addSection({
      children: [
        new Paragraph({
          text: 'Grant Results',
          heading: HeadingLevel.TITLE,
          spacing: { after: 400 },
        }),
        ...grantParagraphs,
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'GrantResults.docx');
    console.log('Word document exported successfully.');
  } catch (error) {
    console.error('Error exporting to Word:', error);
    alert('There was an error exporting to Word. Please try again.');
  } finally {
    setExportLoading(false);
  }
}

export async function handleShare(grants) {
  console.log('Attempting to share grant results.');
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
      console.log('Grant results shared successfully.');
    } catch (error) {
      console.error('Error sharing:', error);
      alert('There was an error sharing the results. Please try again.');
    }
  } else {
    alert('Sharing is not supported in this browser.');
  }
}

export function handlePrint() {
  console.log('Initiating print of grant results.');
  window.print();
}