// import SandboxListItem from './SandboxListItem';
import SandboxCard from './SandboxCard';

const GenericSandbox = ({ item, ...props }) => {
  const { sandbox } = item;

  const Component = SandboxCard;

  const sandboxProps = {
    sandbox,
    ...props
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
