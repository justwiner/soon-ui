<script>
import Base from "./base.md";
import Api from "./api.md";
import DirectionSet from "./directionSet.md";
import HoverStop from "./hoverStop.md";
import Speed from './speed.md'
export default {
    render(){
        return (
            <div>
                <Base></Base>
                <DirectionSet></DirectionSet>
                <HoverStop></HoverStop>
                <Speed></Speed>
                <Api class="markdown"></Api>
            </div>
        );
    }
};
</script>