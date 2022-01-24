export default function GenInfoPreview(props) {
  const { name, role, address, contact, email, site } = props.genInfoValues;
  return (
    <div>
      <div>{name}</div>
      <div>{role}</div>
      <div>{contact}</div>
      <div>{address}</div>
      <div>{email}</div>
      {site && <div> {site} </div>}
    </div>
  );
}
