import React from 'react'

function Recipes(props) {
  return (
    <div className='container'>
      <div className='row'>
        { props.recipes.map((recipe) => {
          return (
            <div key={recipe.title} className='col-md-4' style={{marginBottom: '2rem'}}>
              <div className='recipes__box'>
                <img src={recipe.image} alt={recipe.title} className='recipe__box-img' />
                <div className='recipe__text'>
                  <h5 className='recipes__title'>
                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                </div>
                <button className='recipe_buttons'>View Recipe</button>
              </div>
            </div>
                )
            }) 
          }
      </div>
    </div>
  )

}

export default Recipes