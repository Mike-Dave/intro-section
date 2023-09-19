function AppLayout({ children }) {
  return (
    <section className="flex flex-col md:flex-row-reverse md:min-h-screen md:justify-center md:p-10 md:mx-[9rem] md:mt-1 md:gap-28  ">
      {children}
    </section>
  );
}

export default AppLayout;
