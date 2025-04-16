import Card from "./Card"
export default function Body({A}){
    return(<>
    <div className="groupimg" >
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/38047553-95f3-47c6-a1ff-4794e1227d3a.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/498eea73-358c-42c1-b482-158e80669be9.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/47b3a34d-8f9f-42fe-97a0-4d8350748924.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png"/>
        <img className="img11" src="https://cdn.zeptonow.com/production/cms/category/ab241d87-da5b-4830-b38f-1a6cd30d0d41.png"/>
    </div>
    <img className="img22" src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"/>
    <div className="box">
        <img className="img33" src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/eaff67d6-aa53-40fe-a6ba-38793acdd518.png" />
        <img className="img33" src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/874d9674-2f4f-4f60-bc5b-9fb52084a738.png" />
    </div>
    <div id="cards-section"> {/* Add ID to allow scrolling */}
            <h2 style={{marginLeft:"3vw"}}>Available Items:</h2>
            <div className="cards" style={{ padding: "2vw" }}>
                {A.map((value, index) => (
                    <Card key={index} name={value.name} price={value.price} discount={value.discount} category={value.category} src={value.src} quantity={value.quantity} />
                ))}
            </div>       
        </div>


    </>)
}