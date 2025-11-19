import AuthorBook from './AuthorBook';
import AuthorName from './AuthorName';

export default function Author() {
  return (
    <main className='flex flex-col gap-10'>
      <AuthorName />
      <AuthorBook />
    </main>
  );
}
