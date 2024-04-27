// css
import './PuppyList.css'

// component
import PuppyCard from '../../components/PuppyCard'

const PuppyList = (props) => {
  return (  
    <main className='list'>
      <h1>PUPPY LIST</h1>

      {!props.puppies.length && <h2>Oops! No puppies here!</h2>}

        <ul>
          {props.puppies.map(puppy =>
            <PuppyCard 
              key={puppy._id} 
              puppy={puppy} 
              handleRemovePuppy={props.handleRemovePuppy}
            />
          )}
        </ul>

    </main>
  )
}

export default PuppyList