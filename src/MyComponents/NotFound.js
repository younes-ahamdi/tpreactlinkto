function NotFound() {
    return (
    <> 
    <style>
        {`
        .not-found-container {
            background-image:url(bgerreur.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - 80px);
            text-align: center;
            padding: 2.6%;
            
        }
  
        .not-found-image {
        max-width: 300px;
        margin-bottom: 12rem;
        border-radius: 10px;
        margin-top:-6%;
        }
  
        .not-found-container h1 {
        color: white;
        margin-bottom: 1rem;
        }
  
        .not-found-button {
        background-color: #6b9abe;
        color: white;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        border-radius: 25px;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
        }
  
        .not-found-button:hover {
        background-color: #5487a3;
        }
        `}
        </style>
  
      <div className="not-found-container">
        <img
          src="https://i.imgur.com/qIufhof.png" // Replace with your preferred 404 image URL
          alt="404 Not Found"
          className="not-found-image"
        />
        <h1>404 - Page Non Trouvée</h1>
        <p><b>Désolé, la page que vous recherchez n'existe pas.</b></p>
        <a href="/" className="not-found-button">
          Retour à l'accueil
        </a>
      </div>
    </>
  
    );
  }
  
  export default NotFound;
  