import React from 'react';
import { Person } from '../../types/Person';
import { Link } from 'react-router-dom';

interface Props {
  person?: Person;
  name?: string | null;
}

export const PersonLink: React.FC<Props> = ({ person, name }) => {
  if (!person) {
    return <span>{name || '-'}</span>;
  }

  const isFemale = person.sex === 'f';

  return (
    <Link
      to={`/people/${person.slug}`}
      className={isFemale ? 'has-text-danger' : ''}
    >
      {person.name}
    </Link>
  );
};
