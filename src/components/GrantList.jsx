import { For } from 'solid-js';

export default function GrantList(props) {
  const { grants } = props;

  return (
    <div id="printableArea">
      <For each={grants()}>
        {(grant) => (
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-purple-600">{grant.name}</h3>
            <p class="text-gray-700 my-2">{grant.description}</p>
            <p class="text-gray-700">
              <strong>Eligibility Criteria:</strong> {grant.eligibilityCriteria}
            </p>
            <p class="text-gray-700">
              <strong>Website:</strong>{' '}
              <a
                href={grant.website}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                {grant.website}
              </a>
            </p>
          </div>
        )}
      </For>
    </div>
  );
}