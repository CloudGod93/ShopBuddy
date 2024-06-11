type Props = {
  children: React.ReactNode;
};

const DashDoardLayout = ({ children }: Props) => {
  return (
    <>
      <main className='px-3 lg:px-14'>{children}</main>
    </>
  );
};

export default DashDoardLayout;
