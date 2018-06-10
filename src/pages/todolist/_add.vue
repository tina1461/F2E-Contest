<template>
    <div class="block-add" v-if="toDoListTab.currentStatus == 0 ">
        <div class="item-add"  @click="toDo.status.add = true" v-show="!toDo.status.add">
            <i class="fas fa-plus"></i>
            <span>Add Task</span>
        </div>
        <div class="item-add-more add" v-show="toDo.status.add">
            <div class="card-header">
                <div class="block-input">
                    <div class="check-input">
                        <input class="form-check-input " type="checkbox" name="" id="check_add" value="false">
                        <label class="form-check-label" for="check_add">
                        </label>
                    </div>
                    <input type="text" placeholder="Type Somthing here...">
                    
                </div>
                <div class="block-control">
                    <div class="control-item get-favorite">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="control-item get-edit">
                        <i class="fas fa-edit"></i>
                    </div>
                    
                </div>
                
            </div>
            <div class="card-content">

            </div>
            <div class="card-btn-groups">
                <div class="card-btn cancel">
                    <i class="fas fa-times"></i>
                    Cancel
                </div>
                <div class="card-btn add">
                    <i class="fas fa-plus"></i>
                    Add Task
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "add",
  props: ['toDoListTab','toDo'],
};
</script>

