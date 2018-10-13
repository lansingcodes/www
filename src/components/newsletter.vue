<template>
  <resource-section
    id="newsletter"
    heading="Newsletter Signup"
    description="Stay informed on all things Lansing Codes"
  >
    <form>
      <div class="flex">
        <div class="form-group col-33">
            <label for="exampleInputName2">First Name:</label>
            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
        </div>
        <div class="form-group col-33">
            <label for="exampleInputName2">Last Name:</label>
            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
        </div>
        <div class="form-group col-33">
            <label for="exampleInputEmail2">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-signup">Signup</button>
      </div>
    </form>
  </resource-section>
</template>

<script>
  import resourceSection from './resource-section'

  export default {
    components: {
      resourceSection
    }
  }
</script>

<style lang="scss" scoped>
    .col-33 {
        width: 100%;
        padding: 5px;
    }

    .flex {
        max-width: 1000px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-bottom: 30px;
        margin: auto;

        @media (min-width: 992px) { 
            flex-direction: row;
         }
    }

    .form-group {
        label {
            padding-right: 10px;
        }
    }

    .btn-signup {
        padding: 6px 30px;
    }
</style>
