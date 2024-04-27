import PuppyIcon from "./PuppyIcon"

const PuppyCard = ({ puppy, handleRemovePuppy }) => {
  return (  
    <li>
      <section>
        <button onClick={() => handleRemovePuppy(puppy._id)}>
          X
        </button>
      </section>

      <PuppyIcon puppy={puppy}/>

      <h2>{puppy.name}</h2>
      <p>a {puppy.age}-year-old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard;