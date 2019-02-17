<template>
  <div>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          New Transaction
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12>
              <v-menu
                v-model="transactionDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                lazy
                full-width
                max-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="transaction.date"
                  label="Transaction Date"
                  prepend-icon="event"
                  readonly />
                <v-date-picker v-model="transaction.date" @input="transactionDateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12>
              <v-select
                v-model="transaction.type"
                :items="transactionTypes"
                menu-props="auto"
                label="Transaction Type"
                prepend-icon="payment" />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="description"
                label="Description"
                v-model="transaction.description"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                type="number"
                prepend-icon="money_off"
                label="Charge"
                v-model="transaction.charge" />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                type="number"
                prepend-icon="attach_money"
                label="Deposit"
                v-model="transaction.deposit" />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                label="Notes"
                v-model="transaction.notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="reset">Reset</v-btn>
          <v-btn flat color="primary" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      transactionDateMenu: false,
      transactionTypes: ['Credit Card', 'Debit Card', 'Check', 'Deposit'],
      transactionDate: new Date().toISOString().substr(0, 10),
      transactionType: null,
      transaction: {
        date: new Date().toISOString().substring(0, 10),
        type: null,
        description: '',
        charge: 0,
        deposit: 0,
        notes: ''
      }
    }
  },
  methods: {
    reset () {
      this.transaction = {
        type: null,
        description: '',
        charge: 0,
        deposit: 0,
        notes: '',
        date: new Date().toISOString().substr(0, 10)
      }
    },
    save () {
      console.log(this.transaction)
    }
  }
}
</script>

<style>

</style>
