export function Banner({logo}) {
    let urlBanner = 'https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/1281/hero_bg_brawlstars.a385872a.webp';
    return(
        <>
            <div style={{position: 'absolute', width: '100%', height: '80vh', backgroundImage:`url(${urlBanner})`, top: '0', zIndex:'-2', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>
                {logo.aparece && <div style={{background:'url(https://supercell.com/images/c556e70aef303c858602c5333de1d610/main_logo_brawlstars.19e45d17.webp)', width:'10%', aspectRatio: '1/1', backgroundSize:'contain', backgroundRepeat:'no-repeat', position:'relative', top:'75px', margin:'auto'}}></div>}                  
            </div>
        </>
    )
}