{{each data}}
<tr>
    <td>{{$index+1}}</td>
    <td>{{$value.compony-logo}}</td>
    <td>{{$value.position-name}}</td>
    <td>{{$value.position-name}}</td>
    <td>{{$value.city}}</td>
    <td>{{$value.salary}}</td>
    <td>{{$value.create-time}}</td>
    <td>
        <button data-id="{{$value._id}}" type="button" class="btn btn-primary update-position">修改</button>
        <button data-id="{{$value._id}}" type="button" class="btn btn-danger del-position">删除</button>
    </td>
</tr>
{{/each}}