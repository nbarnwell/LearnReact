
function MyInfo() {
    let name = 'Neil Barnwell';
    let blurb = "I'm an Application Developer and Software Architect for a wide variety of software solutions including websites and desktop applications. Most recently focussed on a bespoke web-based warehouse management system using .NET and browser tech.\r\n\r\nSince my move to .NET I've become active in the community, attending monthly usergroup meetings and various conferences. I've even made a foray into speaking at these events about topics I am passionate about.\r\n\r\nWhile I love experimenting with new tech and have an open source project on GitHub, my current focus is less on specific new technologies and more on good principles and techniques.\r\n\r\nWhen not at work I'm a family man, biker, amateur photographer, guitarist and of course, software developer.";
    let places = ['Toronto', 'New York', 'Scotland'];

    return (
        <div>
            <h1>{name}</h1>
            <p>{blurb}</p>
            <ul>
            {places.map((place) => {
                return (<li>{place}</li>)
            })}
            </ul>
        </div>
    )
}

export default MyInfo;