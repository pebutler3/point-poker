<script setup>
const store = useSession();
</script>

<template>
  <h1>{{ store.temporarySession.session_name ?? '' }}</h1>
  <!-- 
    TODO:
    I think this page is redundant
    This can just be achieved on the Session Page

    Instead of checking whoami for whether or not
    We show JoinSession we can check if our userId (whoami.id)
    is in the activeSession.users list
   -->
  <JoinSession
    v-model:sessionUsername="store.sessionUsername"
    v-model:session-observer="store.sessionObserver"
    @join-session="useJoinSession"
  />
</template>

<style>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid var(--border-blue);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: var(--light-blue);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--border-blue);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid var(--dark-blue);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>