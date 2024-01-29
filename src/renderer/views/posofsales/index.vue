<template>
  <div class="app-container">

    <!-- Note -->
    <div style="background:yellow;padding:5px">
      <h4 style="text-align:center">Resize the browser window to see the responsive effect.</h4>
    </div>





    <!-- The flexible grid (content) -->
    <div class="row">

      <div class="main">


        <el-tabs style="height: 200px;">
          <el-tab-pane label="User">
            <span slot="label"> <el-image :src="all" class="avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </span>


            <el-row :gutter="20">
              <el-col :span="6" v-for="(produit, index) in products" :key="produit.id">
                <el-card :body-style="{ padding: '10px' }">
                  <img @click="addProduct(produit.id)" style="width:  150px; height: 200px;" :src="produit.photopath"
                    class="image">
                  <div style="padding: 14px;">
                    <span>Yummy hamburger</span>
                    <div class="bottom clearfix">
                      <el-button @click="addProduct(produit.id)" type="success" round>Success</el-button>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Config"> <span slot="label"> <el-image :src="userImage" class="avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </span>Config</el-tab-pane>
          <el-tab-pane label="Role"> <span slot="label"> <el-image :src="userImage" class="avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </span>Rôle</el-tab-pane>
          <el-tab-pane label="Task"> <span slot="label"> <el-image :src="userImage" class="avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </span>Tâche</el-tab-pane>
        </el-tabs>

      </div>
      <div class="side">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <h3>Bills</h3>
        <div style="width: 350px">
          <el-table :data="tableData" size="mini" :highlight-current-row="true" :highlight-selection-row="true" :fit="true">
          <el-table-column size="mini" fixed prop="libelet" label="libelet" >
          </el-table-column>
          <el-table-column prop="categorie" label="categorie" >
          </el-table-column>



          <el-table-column prop="prix" label="prix" >
          </el-table-column>
          <el-table-column fixed="right" label="Opérations" >
            <template slot-scope="{row}">
            <div>
              <el-button type="danger" @click="handleClick(row.id)"  icon="el-icon-delete" circle></el-button>
        
            </div>
            </template>
          </el-table-column>
        </el-table>
        </div>


        <div class="footer">
          <el-row>

  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>
        </div>
      </div>
    </div>

    <!-- Footer -->


  </div>
</template>



<script setup>

import { ref } from "vue"

import all from "@/assets/c6.png"

import userImage from "@/assets/1.png"
const tableData = ref([{
  id: 9,
  libelet: 'capotshino',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: '@/assets/1.png',
},
{
  id: 16,
  libelet: 'capotshino',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: '@/assets/1.png',
}])
const products = ref([{
  id: 1,
  libelet: 'HOT COFFE',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: require("@/assets/logo.png"),

}, {
  id: 3,
  libelet: 'starbacks',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '20DH',
  photopath: userImage,

}, {
  id: 4,
  libelet: 'MILK',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: '/assets/1.png',

}, {
  id: 5,
  libelet: 'capotshino',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: '@/assets/1.png',

}]);

const addProduct = (idProduct) => {
  tableData.value.push({
    id: 9,
  libelet: 'capotshino',
  categorie: 'drink',
  sousCategorie: 'drink',
  prix: '10DH',
  photopath: '@/assets/1.png',
  })
  console.log(idProduct)
};

const loginForm = ref({
  username: "",
  password: "",
});
const loginFormRef = ref()

const loading = ref(false);
const pwdType = ref("password");

const handleClick = (idProduct) => {
  console.log(idProduct)
  console.log(tableData.value)
  tableData.value = tableData.value.filter(item => {
    console.log(item.id)

    return item.id !== idProduct
  } )
};

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.avatar {
  width: 70px;
  height: 70px;
  margin-right: 10px;

  ::v-deep img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.ie-stickyFooter {
  /* 1 */
  display: -ms-flexbox;
  -ms-flex-direction: column;
}

#page {
  width: 100%;
  /* 2 */
  min-height: 98vh;
  display: -webkit-flex;
  /* 3 */
  display: flex;
  -webkit-flex-direction: column;
  /* 3 */
  flex-direction: column;
}

#content {
  -webkit-flex-grow: 1;
  /* 3 */
  flex-grow: 1;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}




/* Header/logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Style the top navigation bar */
.navbar {
  display: flex;
  background-color: #333;
}

/* Style the navigation bar links */
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Column container */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Fake image, just for this example */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {

  .row,
  .navbar {
    flex-direction: column;
  }
}
</style>