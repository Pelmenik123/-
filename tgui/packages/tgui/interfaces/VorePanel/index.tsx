import { useBackend } from "../../backend";
import { Window } from '../../layouts';

export const NewVorePanel = (props, context) => {
  const { data, act } = useBackend(context);
  
  return (
	<Window width={700} height={660} theme="abstract" resizable>

	</Window>
  );
};