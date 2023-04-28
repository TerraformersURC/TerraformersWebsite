export const RotatedContentBar = (props: any) => {
    return (
        <div>
            <div className="rotated-background">
                <br/><br/>
                { props.children }
            </div>
        </div>
    );
};