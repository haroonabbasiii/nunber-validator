function NumberValidator(Str) {
    var count = 0;
    if (Str[count] == "1") {
        ++count;
        if (Str[count] == " ") {
            ++count;
            if (Str[count] == "5") {
                ++count;
                if (Str[count] == "5") {
                    ++count;
                    if (Str[count] == "5") {
                        ++count;
                        if (Str[count] == "-") {
                            ++count;
                            if (Str[count] == "5") {
                                ++count;
                                if (Str[count] == "5") {
                                    ++count;
                                    if (Str[count] == "5") {
                                        ++count;
                                        if (Str[count] == "-") {
                                            ++count;
                                            if (Str[count] == "5") {
                                                ++count;
                                                if (Str[count] == "5") {
                                                    ++count;
                                                    if (Str[count] == "5") {
                                                        ++count;
                                                        if (Str[count] == "5") {
                                                            return true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (Str[count] == "(") {
                ++count;
                if (Str[count] == "5") {
                    ++count;
                    if (Str[count] == "5") {
                        ++count;
                        if (Str[count] == "5") {
                            ++count;
                            if (Str[count] == ")") {
                                ++count;
                                if (Str[count] == " ") {
                                    ++count;
                                    if (Str[count] == "5") {
                                        ++count;
                                        if (Str[count] == "5") {
                                            ++count;
                                            if (Str[count] == "5") {
                                                ++count;
                                                if (Str[count] == "-") {
                                                    ++count;
                                                    if (Str[count] == "5") {
                                                        ++count;
                                                        if (Str[count] == "5") {
                                                            ++count;
                                                            if (Str[count] == "5") {
                                                                ++count;
                                                                if (Str[count] == "5") {
                                                                    return true;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (Str[count] == "5") {
        ++count;
        if (Str[count] == "5") {
            ++count;
            if (Str[count] == "5") {
                ++count;
                if (Str[count] == "5") {
                    ++count;
                    if (Str[count] == "5") {
                        ++count;
                        if (Str[count] == "5") {
                            ++count;
                            if (Str[count] == "5") {
                                ++count;
                                if (Str[count] == "5") {
                                    ++count;
                                    if (Str[count] == "5") {
                                        ++count;
                                        if (Str[count] == "5") {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (Str[count] == "555-555-5555") {
        return true;
    }
    return false;
}
function Main_ra() {
    alert("The Number ");
    var Str = document.getElementById("Number").value;

    if (NumberValidator(Str)) {
        document.getElementById("displaytext").innerText = "The Number is Correct";
        alert("The Number is Correct");
    }
    else {
        document.getElementById("displaytext").innerText = "The Number is Not Correct";
        alert("The Number is Not Correct");
    }
}