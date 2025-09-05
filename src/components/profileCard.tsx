export interface ProfileCardProps {
  name: string;
  age: number;
  greeting: Element;
  children?: React.ReactNode; // Add children to the prop type
}

export const ProfileCard = ( {name, age, greeting, children}: ProfileCardProps) => {
//   const {name, age, greeting, children} = props;
  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age: {age}</p>
      {greeting}
      <div>{children}</div>
    </>
  );
};
