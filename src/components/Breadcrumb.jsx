export default function Breadcrumb(props) {
    const breadCrumb = props.name
    return(
        <div>
            <h5 className="breadcrumb">{breadCrumb}</h5>
        </div>
    )
}