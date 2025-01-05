
const QodeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return(
<div className="qode h-full sm:h-screen w-full flex flex-col justify-center items-center ">
  <div className="h-full p-8">
     <main className="bg-white border-black border-2">

{children}
  </main>
  </div>
 
</div>

  ) 
};

export default QodeLayout;
