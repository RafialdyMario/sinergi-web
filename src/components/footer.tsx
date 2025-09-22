export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-16">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} My App. All rights reserved.
      </p>
    </footer>
  );
}
