import { createSignal, Show } from 'solid-js';
import QuestionsForm from './components/QuestionsForm';
import Results from './components/Results';

export default function App() {
  const [currentPage, setCurrentPage] = createSignal('welcome');
  const [answers, setAnswers] = createSignal({
    businessDescription: '',
    customerTypes: '',
    sector: '',
    annualTurnover: '',
    yearsOperating: '',
    businessLocation: '',
    supplyArea: '',
  });
  const [loading, setLoading] = createSignal(false);
  const [grants, setGrants] = createSignal([]);

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 flex flex-col items-center text-gray-800">
      <Show when={currentPage() === 'welcome'}>
        <div class="max-w-xl bg-white p-6 rounded-lg shadow-md text-center">
          <h1 class="text-3xl font-bold mb-4 text-purple-600">
            Welcome to the Business Grant Finder!
          </h1>
          <p class="text-gray-700">
            We will help you find potential sources of funding that may help support your business.
          </p>
          <button
            class="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={() => setCurrentPage('questions')}
          >
            Get Started
          </button>
        </div>
      </Show>

      <Show when={currentPage() === 'questions'}>
        <QuestionsForm
          answers={answers}
          setAnswers={setAnswers}
          setCurrentPage={setCurrentPage}
          setLoading={setLoading}
          loading={loading}
          setGrants={setGrants}
        />
      </Show>

      <Show when={currentPage() === 'results'}>
        <Results
          grants={grants}
          setCurrentPage={setCurrentPage}
        />
      </Show>

      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 text-purple-600 hover:underline"
      >
        Made on ZAPT
      </a>
    </div>
  );
}