
//// task 1 
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
        console.log(value);
    }
}


$


///// task 4:
async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("Réponse API 1"), 2000));
    const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("Réponse API 2"), 3000));

    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);

    console.log("Résultats combinés :", result1, result2);
}




/// task 5:
 async function parallelCalls(urls) {
    const fetchData = (url) => new Promise(resolve => setTimeout(() => resolve(`Données depuis ${url}`), 1000));

    const results = await Promise.all(urls.map(url => fetchData(url)));

    console.log("Réponses des appels parallèles :", results);
}



