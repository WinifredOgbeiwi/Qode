
const QodeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return(
<div className="qode h-screen w-full flex flex-col justify-center items-center p-14 md:p-0">
  <main className="bg-white md:w-1/2 h-fit w-full border-2 pb-16 border-black shadow">{children}</main>
</div>

  ) 
};

export default QodeLayout;
