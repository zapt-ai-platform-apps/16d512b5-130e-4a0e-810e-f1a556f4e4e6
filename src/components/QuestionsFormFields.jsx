export default function QuestionsFormFields(props) {
  const { answers, setAnswers, loading } = props;

  return (
    <>
      <h2 class="text-2xl font-bold mb-4 text-purple-600 text-center">
        Tell us about your business
      </h2>
      <div class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            1. Please describe exactly what your business does.
          </label>
          <textarea
            rows="3"
            value={answers().businessDescription}
            onInput={(e) =>
              setAnswers({ ...answers(), businessDescription: e.target.value })
            }
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            2. What types of customers do you serve?
          </label>
          <input
            type="text"
            value={answers().customerTypes}
            onInput={(e) =>
              setAnswers({ ...answers(), customerTypes: e.target.value })
            }
            placeholder="e.g., B2C, B2B"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            3. Which sector does your business belong to?
          </label>
          <input
            type="text"
            value={answers().sector}
            onInput={(e) => setAnswers({ ...answers(), sector: e.target.value })}
            placeholder="e.g., construction, manufacturing"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            4. What is your business’s annual turnover (in £GBP)?
          </label>
          <input
            type="number"
            value={answers().annualTurnover}
            onInput={(e) =>
              setAnswers({ ...answers(), annualTurnover: e.target.value })
            }
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            5. How many years has your business been operating?
          </label>
          <input
            type="number"
            value={answers().yearsOperating}
            onInput={(e) =>
              setAnswers({ ...answers(), yearsOperating: e.target.value })
            }
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            6. Where is your business based?
          </label>
          <input
            type="text"
            value={answers().businessLocation}
            onInput={(e) =>
              setAnswers({ ...answers(), businessLocation: e.target.value })
            }
            placeholder="City or region"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            7. Where do you supply your products and services?
          </label>
          <input
            type="text"
            value={answers().supplyArea}
            onInput={(e) =>
              setAnswers({ ...answers(), supplyArea: e.target.value })
            }
            placeholder="e.g., locally, regionally, UK-wide, internationally"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
        </div>
        <button
          type="submit"
          class={`w-full mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
            loading() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading()}
        >
          {loading() ? 'Searching for Grants...' : 'Find Grants'}
        </button>
      </div>
    </>
  );
}