// Массив новостей
const news = [
    {
        title: "Clothes for Yorkies",
        image: "img/iork.png",
        description: `<p>The Yorkshire Terrier is not just a family favorite and a friend of children, but a real generator of fluffy energy and a storehouse of canine intelligence. Whatever you call this milahu, he will still find a way to surprise you. And even if, thanks to its miniature size and charming appearance, it resembles a plush toy, a real terrier is hiding inside.</p>
        <p>Yorkies are small in size, their weight usually does not exceed 3.2 kg. Despite their small size, they are very bold and curious ponytails. Yorkshire Terriers need constant attention and communication with their pet parent. They are endlessly eager to play, explore and explore.</p>
        <p>Like any other four-legged dog, Yorkshire Terriers are recommended to take regular walks in the fresh air and exercise for a full-fledged, healthy and happy life. Yorkies belong to that breed of dog for which outfits are not just a fashionable and stylish addition, but a vital necessity.</p>
        <p>In this article, we will analyze what baby York's clothes are for, consider the features of choosing models and fabrics, and select a wardrobe for your ponytail for any season, based on the characteristics of the breed.</p>
    `,
    },
    {
        title: "How to take a picture of a pet?",
        description: `<p>At the time of shooting, both you and your pet should be in a good mood. Both cats and dogs are sensitive to the emotional state of the owner, so do not plan a photo shoot if you feel sad or unwell. The same applies to the well–being of the pet - make sure that he is healthy and in a good mood.</p>
        <p>It is good if there is a person who can help take a picture of a pet. It is better if it is someone from a family member or a person whom the four-legged knows. The assistant will be able to distract the pet and help him to take the right position. If you are going to take photos of pets in the New Year's interior, think over the background. Take away the excess, put things in order in the room. Remember that no matter how beautiful the festive decoration is, the four-legged friend should remain the center of the composition.</p>
        <p>And there's a secret here: the further away it is from the background, the blurrier the background will be. Experiment with the distance to find the optimal one.</p>`,
        image: "img/foto.png",
    },
    {
        title: "Choosing shoes and socks for the dog",
        description: `<p>Increasingly, we can meet dogs in shoes or socks on the streets. Ponytails of all breeds and sizes need shoes, especially those who live permanently in the city, which means strolling along its streets. What shoes are for, how to choose them, and what to look for are discussed in this article...</p>
<p>Veterinarians and dog handlers almost unanimously say that shoes are necessary for any four-legged animal! The need for high-quality and comfortable shoes does not depend on the size or breed of the pet. Boots are an important element of protection, because even in the Far North, sled dogs were given special shoes to protect their paws from snow. Reagents are a serious problem in cities. They cause burns to the pads, poisoning if they are licked off. Therefore, boots are used even for service dogs, for example, at airports. There, the quadrupedal runs the risk of stepping into saturated compounds that are used to treat airplanes so that they are not covered with ice. Therefore, you can't do without special boots.</p>
<p>Each pet is unique, which means it has its own thermoregulation. Tails without a warm, thick undercoat freeze faster in winter, while long-haired ones are more difficult to tolerate hot summer weather.</p>`,
        image: "img/foot.png",
    }
];

// Функция для отображения новостей
function displayNews() {
    const newsContainer = document.getElementById('news-container');

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Вызываем функцию для отображения новостей при загрузке страницы
displayNews();