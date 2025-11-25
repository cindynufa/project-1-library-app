import { Link } from 'react-router';
import AuthorCard from '../../ui/AuthorCard';

export default function AuthorName() {
  return (
    <Link to="/Author">
      <AuthorCard name="Author name" text="5 books" />
    </Link>
  );
}
