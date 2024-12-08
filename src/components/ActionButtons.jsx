import { createSignal } from 'solid-js';
import { handleExportToWord, handleShare, handlePrint } from '../utils/ActionHandlers';

export default function ActionButtons(props) {
  const { grants, setCurrentPage } = props;
  const [exportLoading, setExportLoading] = createSignal(false);

  return (
    <div class="flex flex-wrap mt-6 space-x-4">
      <button
        onClick={() => handleExportToWord(grants, setExportLoading)}
        class={`mt-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
          exportLoading() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={exportLoading()}
      >
        {exportLoading() ? 'Exporting...' : 'Export to MS Word'}
      </button>
      <button
        onClick={() => handleShare(grants)}
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