
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChildComponent = (props: any) => {
    
      return (
    <div>

<div className="text-center px-12 py-5  ">
  <ul className="py-9 w-8/10 px-10">
  <h1 className="bg-white mb-8 py-10 w-52 h-48">
  {props.image}
  </h1>
  
  <p className="text-green-500 font-medium px-8 ">
    {props.Name}
  </p>
  <p className="font-medium px-4 ">
    {props.price}
  </p>
  <p className="font-medium px-6 ">
    {props.Reveiws}
  </p>
  
  </ul>
  
</div>

    </div>
    )
  }
  
  export default ChildComponent

