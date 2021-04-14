// import SandboxListItem from './SandboxListItem';
import SandboxCard from './SandboxCard';

const GenericSandbox = ({ item }) => {
  const { sandbox } = item;

  const Component = SandboxCard;

  const sandboxProps = {
    sandbox
  };

  return (
    <Component
      {...sandboxProps}
    />
  );
};

export const Sandbox = GenericSandbox;
export default Sandbox;

export * from './NewSandbox';
