import personsService from "../services/persons";
/* eslint-disable react/prop-types */
const Persons = ({
  personsToShown,
  setPersons,
  setNotificationMessage,
  setNotificationClass,
}) => {
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personsService
        .remove(id)
        /* eslint-disable react/prop-types */
        .then(setPersons(personsToShown.filter((p) => p.id != id)))
        /* eslint-disable no-unused-vars */
        .catch((error) => {
          setNotificationMessage(
            `Information of '${name}' was already removed from server`
          );
          setNotificationClass("error");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          /* eslint-disable react/prop-types */
          setPersons(personsToShown.filter((p) => p.name !== name));
        });
    }
  };
  return (
    <div>
      {personsToShown.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id, person.name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
