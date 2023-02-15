
export default function Articles() {
    let articles = [
        {
            title: "Html",
            contenu: "Un cours sur HTML",
            image: "https://www.djemai-samy.com/blog/2.programmation/1.web/1.html/html.png",
        },
        {
            title: "CSS",
            contenu: "Un cours sur CSS",
            image: "https://www.djemai-samy.com/blog/2.programmation/1.web/2.css/css.png",
        },
        {
            title: "Javascript",
            contenu: "Un cours sur Javascript",
            image:"https://www.djemai-samy.com/blog/2.programmation/1.web/3.javascript/javascript.png",
        },
    ];
    
  return (
    <div>
          { articles.map(function(element,index){
        return <div key={index}> 
            <h1>{element.title}</h1> 
            <p> {element.contenu}</p>
            <img src={element.image} alt='logo' width='100%' height='100%' ></img>
            </div>
           }  
         )}
    </div>
  
  );
}
