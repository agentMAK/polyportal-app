import Button from "../../main/Button";

const CardButton = (props:any) => {

    return (
      <div className={props.layout === 'center' ? 'w-full flex justify-center' : 'w-full flex justify-end'}>
      {props.status === 'end' ? <Button size="m" variant="dark" link={props.redirect}>
          End Lesson
        </Button> : <Button
        size="m"
        variant="dark"
        onClick={() => {
          props.onClick();
        }}
      >
        Continue
      </Button>}
    </div>
    )
  }
  
export default CardButton

CardButton.defaultProps = {
  layout:'right'
}