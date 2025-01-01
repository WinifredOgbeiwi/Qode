
const QodeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return(
<div className="qode h-screen w-full flex flex-col justify-center items-center p-14 md:p-0">
  <main className="bg-white md:w-1/2 md:h-1/2 w-full h-full p-5 border-2 border-black shadow">{children}</main>
</div>

  ) 
};

export default QodeLayout;
