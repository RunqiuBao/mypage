const SimpleFooter = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2018-{new Date().getFullYear()} Copyright: Runqiu Bao
        </p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
