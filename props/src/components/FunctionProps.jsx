let FunctionProps = ({ userName, demo, array }) => {
  return (
    <>
      <h1>{userName}</h1>
      <p>{demo()}</p>

      {array.map((value) => (
        <p>{value}</p>
      ))}
    </>
  );
};

export default FunctionProps;
