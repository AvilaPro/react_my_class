export function News() {
    let noticias = [
        {
            id: 0,
            title: '#BrawlTogether - New Community Event!',
            author: 'Brawl Stars',
            picture: 'https://brawlstars.inbox.supercell.com/xdjcscmv3zo3/7A2G2KhfxAFj8bB9PxsJQb/c333af67dcaa53be7e1acec3f273189d/0125_BrawlTogether_800x433.png?w=800&h=433&fit=fill&f=center&fm=webp'
        },
        {
            id: 1,
            title: '#StarrToon Patch Notes',
            author: 'Brawl Stars',
            picture: 'https://brawlstars.inbox.supercell.com/xdjcscmv3zo3/1o94YSxAuxjPOCt0aNvpEK/019f00d5d7d796aa1aa5bbb55db4e32c/_v21211_Patch_notes_800x433.png?w=800&h=433&fit=fill&f=center&fm=webp'
        }
    ]

    const newsComponents = noticias.map(el =>
        <div key={el.id}>
            <div style={{ height: '80%', backgroundImage: `url(${el.picture})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', width: '100%' }}></div>
            <p style={{ color: "fuchsia", textAlign: 'center' }}>{el.author}</p>
            <h5 style={{ textAlign: 'center' }}>{el.title}</h5>
        </div>
    );

    return (
        <>
            <div style={{position: "absolute", top:'80vh', width:'100%'}}>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>NEWS</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding:'0 15%', height:'80vh', width:'100%', boxSizing:'border-box' }}>
                    {newsComponents}
                </div>
            </div>
        </>
    )

}