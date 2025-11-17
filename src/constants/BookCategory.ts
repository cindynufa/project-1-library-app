type BookCategory = {
  href: string;
  src: string;
  text: string;
};

const BookCategoryConst: BookCategory[] = [
  { href: '#fiction', src: '/icons/category-fiction.png', text: 'Fiction' },
  {
    href: '#non-fiction',
    src: '/icons/category-non-fiction.png',
    text: 'Non-Fiction',
  },
  {
    href: '#self-improvement',
    src: '/icons/category-self-improvement.png',
    text: 'Self-Improvement',
  },
  { href: '#finance', src: '/icons/category-finance.png', text: 'Finance' },
  { href: '#science', src: '/icons/category-science.png', text: 'Science' },
  {
    href: '#education',
    src: '/icons/category-education.png',
    text: 'Education',
  },
];

export default BookCategoryConst;
