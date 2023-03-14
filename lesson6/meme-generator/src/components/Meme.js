import React from "react";
import "../styles/Meme.css"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "https://i.imgflip.com/3si4.jpg"
    })
    const [count, setCount] = React.useState(0);

    const [allImages, setAllImages] = React.useState([]);

    React.useEffect(() => {
        async function getImages() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllImages(data.data.memes);
            console.log(data);
            /*
            JSON.stringify()  jAVASCRIPT Obj -> JSON 

            json() JSON OBJESINI -> JAVASCRIPT OBJESINE CEVIRIYOR
            */
        }
        getImages();
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allImages.length);
        const url = allImages[randomNumber]?.url;

        /* 
        {
        topText:"",
        bottomText:"",
        image:"https://i.imgflip.com/3si4.jpg"
        }
        "Spread operatörü (...) mevcut bir nesnenin tüm özelliklerini içeren yeni bir nesne oluşturmak için kullanılır.

        React bağlamında, bir bileşenin durumunu güncellememiz gerektiğinde, en iyi uygulama, önceki durumun tüm özelliklerini içeren yeni bir nesne oluşturmaktır. Bu, React bileşenlerinin değiştirilemez (immutable) olması nedeniyle gereklidir. Yani bileşen durumu doğrudan değiştirilmemelidir. Bunun yerine, güncellenmiş durumu içeren yeni bir nesne oluştururuz ve bu nesneyi setState veya useState fonksiyonuna geçerek bileşen durumunu güncelleriz.

        Spread operatörü, önceki durum nesnesinin tüm özelliklerini manuel olarak kopyalamadan yeni bir nesne oluşturmayı kolaylaştırır. Önceki durum nesnesini ...prevState kullanarak yayabilir ve gerekli özellikleri ekleyebilir veya değiştirebiliriz.     
        
        */
        setMeme((prevState) => {
            return { ...prevState, image: url }
        });
        console.log(meme);

    }

    function handleChange(event){
        console.log(event);
        const {name,value,baseURI} = event.target;

        console.log(name); // topText
        console.log(value); // Kullanici inputu
        console.log(baseURI);

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]:value
        }));
    }

    //getMemeImage();

    return (
        <>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className="form-btn" onClick={getMemeImage}>Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme-image" alt="meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </>
    )
}
export default Meme;