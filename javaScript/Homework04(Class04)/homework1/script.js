let array = ["Alberto", "Relaxed", "Sleep"];

function tellStory(name, mood, activity){
    console.log(`This is ${name}. Today I am ${mood}. I am ${mood} because I can ${activity} all day.`);
}

tellStory("Alberto", "Relaxed", "Sleep")

function tellStoryTest2(niza){
    let name = niza[0];
    let mood = niza[1];
    let activity = niza[2];
    console.log(`This is ${name}. Today I am ${mood}. I am ${mood} because I can ${activity} all day.`);
}

tellStoryTest2(array);