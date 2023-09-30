import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useSelector } from "react-redux";


const WishList = () => {

    const containerData = useSelector((state)=>state.containerr.addproduct)
    // const dispatch = useDispatch()
    // console.log("count",count)
    // const [netprice,setNetprice] = React.useState(0)
  
    //-------------------RTK QueryFetch-------------------------
    // const { data: containerData, isLoading ,isError} = useContainer1apiDataQuery();
  return (
    <div className='checkout'>
      Saurav Anand
      <div className="p-24 w-full">
        <Grid container spacing={3}>
          {containerData?.map((row) => {

            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={row.id}>
                <Card className="cardSize">
                  <div class="wishimg items_img">
                    <img src={row.imgName} alt="" />
                  </div>
                  <p>
                    Rs.{row.price} <del> Rs.{row.cutprice} </del>
                    <cite> (Rs. {row.off} OFF)</cite>
                  </p>
                  <div class="move" >
                    <h4>MOVE TO BAG</h4>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      
    </div>
  )
}

export default WishList
