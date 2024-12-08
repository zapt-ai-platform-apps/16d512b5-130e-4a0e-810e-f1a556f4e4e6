import GrantList from './GrantList';
import ActionButtons from './ActionButtons';

export default function Results(props) {
  const { grants, setCurrentPage } = props;

  return (
    <div class="max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Grants Available for Your Business</h2>
      <GrantList grants={grants} />
      <ActionButtons grants={grants} setCurrentPage={setCurrentPage} />
    </div>
  );
}