const PuppyCard = ({ puppy }) => {
  return (  
    <li>
      <section>
        <button>X</button>
      </section>
      <h2>{puppy.name}</h2>
      <p>a {puppy.age}-year-old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard;