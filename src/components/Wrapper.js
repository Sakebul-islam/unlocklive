const Wrapper = ({ children, className: classes }) => {
  return (
    <div className={`md:max-w-[1423px] px-2 md:px-4 mx-auto ${classes}`}>
      {children}
    </div>
  );
};

export default Wrapper;
